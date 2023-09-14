$(document).ready(function() {
    $('#example').DataTable({
      "fnCreatedRow": function(nRow, aData, iDataIndex) {
        $(nRow).attr('id', aData[0]);
      },
      'serverSide': 'true',
      'processing': 'true',
      'paging': 'true',
      'order': [],
      'ajax': {
        'url': 'fetch_data.php',
        'type': 'post',
      },
      "aoColumnDefs": [{
          "bSortable": false,
          "aTargets": [5]
        },

      ]
    });
  });
  //Adding new users
  $(document).on('submit', '#addUser', function(e) {
    e.preventDefault();
    var id = $('#addID').val();
    var dept = $('#addDept').val();
    var name = $('#addName').val();
    if (id!= '' && dept != '' && name != '') {
      $.ajax({
        url: "add_user.php",
        type: "post",
        data: {
          id: id,
          department: department,
          name: name,
        },
        success: function(data) {
          var json = JSON.parse(data);
          var status = json.status;
          if (status == 'true') {
            mytable = $('#example').DataTable();
            mytable.draw();
            $('#addUserModal').modal('hide');
          } else {
            alert('failed');
          }
        }
      });
    } else {
      alert('Fill all the required fields');
    }
  });
  //Update existing user data
  $(document).on('submit', '#updateUser', function(e) {
    e.preventDefault();
    var id = $('#id').val();
    var dept = $('#department').val();
    var name = $('#name').val();
    if (id != '' && dept != '' && name != '') {
      $.ajax({
        url: "update_user.php",
        type: "post",
        data: {
          id: id,
          dept: dept,
          name: name
        },
        success: function(data) {
          var json = JSON.parse(data);
          var status = json.status;
          if (status == 'true') {
            table = $('#example').DataTable();
            var button = '<td><a href="javascript:void();" data-id="' + id + '" class="btn btn-info btn-sm editbtn">Edit</a>  <a href="#!"  data-id="' + id + '"  class="btn btn-danger btn-sm deleteBtn">Delete</a></td>';
            var row = table.row("[id='" + trid + "']");
            row.row("[id='" + trid + "']").data([id, department, name,button]);
            $('#exampleModal').modal('hide');
          } else {
            alert('failed');
          }
        }
      });
    } else {
      alert('Fill all the required fields');
    }
  });
  $('#example').on('click', '.editbtn ', function(event) {
    var table = $('#example').DataTable();
    var trid = $(this).closest('tr').attr('id');
    var id = $(this).data('id');
    $('#exampleModal').modal('show');
    $.ajax({
      url: "get_single_data.php",
      data: {
        id: id
      },
      type: 'post',
      success: function(data) {
        var json = JSON.parse(data);
        $('#id').val(json.id);
        $('#department').val(json.department);
        $('#name').val(json.name);
      }
    })
  });
//deleting users
  $(document).on('click', '.deleteBtn', function(event) {
    var table = $('#example').DataTable();
    event.preventDefault();
    var id = $(this).data('id');
    if (confirm("Are you sure want to delete this User ? ")) {
      $.ajax({
        url: "delete_user.php",
        data: {
          id: id
        },
        type: "post",
        success: function(data) {
          var json = JSON.parse(data);
          status = json.status;
          if (status == 'success') {
          } else {
            alert('Failed');
            return;
          }
        }
      });
    } else {
      return null;
    }
  })