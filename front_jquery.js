$(document).ready(function(){
   getTodoList();


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

       $.post("http://localhost:8080/todo/register", {
           todoName: todoName,
           todoDate: todoDate
       }, function(todo) {
            alert($('#todoList > tbody:first').find("td").size());
           if($('#todoList > tbody:first').find("td").length == 1){
               $('#todoList > tbody').empty()
           }
           $('#todoList > tbody:last').append('<tr><td>' + todo.todoName + '</td><td>' + todo.todoDate + '</td></tr>');
       }, 'json');
   });

   function getTodoList(){
       $.get("http://localhost:8080/todo/list",{

       }, function(todoList){
           if(todoList.length > 0){
               var contents = "";
               for (var i in todoList) {
                   var todo = todoList[i];
                   contents += '<tr><td>' + todo.todoName + '</td><td>' + todo.todoDate + '</td></tr>';
               }

               $("#todoContents").html(contents);
           }else{
               $('#todoList > tbody:last').append('<tr><td colspan="2" align="center">할 일이 없습니다.</td></tr>');
           }
       }, 'json');
   }
});