<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Sample JSP Page</title>
</head>
<body>
    <h1>Welcome to My Sample JSP Page</h1>

    <form method="post">
        Enter your name: <input type="text" name="username" />
        <input type="submit" value="Submit" />
    </form>

    <%
        String name = request.getParameter("username");
        if (name != null && !name.trim().isEmpty()) {
    %>
        <h2>Hello, <%= name %>!</h2>
    <%
        }
    %>
</body>
</html>

