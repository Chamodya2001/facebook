function RegisterSave() {
     
    let Name = $('#ControlInput1').val();
      let BirthDay = $('#ControlInput2').val();
      let Age = $('#ControlInput3').val();
      let Address = $('#ControlInput4').val();
      let PhoneNumber = $('#ControlInput5').val();
      let Email = $('#ControlInput6').val();
      let Password = $('#ControlInput7').val();
      
      console.log(Name, " ", Address);
  
      $.ajax({
          method: "POST",
          contentType: "application/json",
          url: "http://localhost:8080/api/v1/Register/save",
          async: true,
          data: JSON.stringify({
              "name":Name,
              "birthday":BirthDay,
              "age":Age,
              "address":Address,
              "phonenumber":PhoneNumber,
              "email":Email,
              "password":Password
          }),
          success: function (data) {
             
              alert("You are registered");
  
          },
          error: function (xhr, exception) {
              alert("Save error");
          }
      });
  
  
  }
 