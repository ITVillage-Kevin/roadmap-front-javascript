$(document).ready(function(){
   $("#btnReg").click(function(){
       var todoName = document.getElementById("todoName").value;
       var todoDate = document.getElementById("todoDate").value;

       if(!todoName){
           alert("할일을 입력해주세요.");
           return false;
       }

       if(!todoDate){
           alert("날짜를 입력해주세요.");
           return false;
       }

       $.post("http://localhost:8080/todoAjax", {
           todoName: todoName,
           todoDate: todoDate
       }, function(todoList) {
           var contents = "";
           for (var i in todoList) {
               var todo = todoList[i];
               contents += '<tr><td>' + todo.todoName + '</td><td>' + todo.todoDate + '</td></tr>';
           }

           $("#todoContents").html(contents);
       }, 'json');
   });
});