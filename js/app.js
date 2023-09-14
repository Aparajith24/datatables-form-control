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
  $(document).on('submit', '#addUser', function(e) {
    e.preventDefault();
    var city = $('#addCityField').val();
    var username = $('#addUserField').val();
    var mobile = $('#addMobileField').val();
    var email = $('#addEmailField').val();
    if (city != '' && username != '' && mobile != '' && email != '') {
      $.ajax({
        url: "add_user.php",
        type: "post",
        data: {
          city: city,
          username: username,
          mobile: mobile,
          email: email
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
  $(document).on('submit', '#updateUser', function(e) {
    e.preventDefault();
    //var tr = $(this).closest('tr');
    var city = $('#cityField').val();
    var username = $('#nameField').val();
    var mobile = $('#mobileField').val();
    var email = $('#emailField').val();
    var trid = $('#trid').val();
    var id = $('#id').val();
    if (city != '' && username != '' && mobile != '' && email != '') {
      $.ajax({
        url: "update_user.php",
        type: "post",
        data: {
          city: city,
          username: username,
          mobile: mobile,
          email: email,
          id: id
        },
        success: function(data) {
          var json = JSON.parse(data);
          var status = json.status;
          if (status == 'true') {
            table = $('#example').DataTable();
            var button = '<td><a href="javascript:void();" data-id="' + id + '" class="btn btn-info btn-sm editbtn">Edit</a>  <a href="#!"  data-id="' + id + '"  class="btn btn-danger btn-sm deleteBtn">Delete</a></td>';
            var row = table.row("[id='" + trid + "']");
            row.row("[id='" + trid + "']").data([id, username, email, mobile, city, button]);
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
    // console.log(selectedRow);
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
        $('#nameField').val(json.username);
        $('#emailField').val(json.email);
        $('#mobileField').val(json.mobile);
        $('#cityField').val(json.city);
        $('#id').val(id);
        $('#trid').val(trid);
      }
    })
  });

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
            //table.fnDeleteRow( table.$('#' + id)[0] );
            //$("#example tbody").find(id).remove();
            //table.row($(this).closest("tr")) .remove();
            $("#" + id).closest('tr').remove();
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

  