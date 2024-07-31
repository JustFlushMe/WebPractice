<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Проверка текста</title>
</head>
<body>
    <h1>HTTP Request Test</h1>

    <form method="post" action="">
        <label for="input">Введите сообщение</label>
        <input type="text" name="message" id="input">
        <button type="submit">Подтвердить</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $message = $_POST["message"];
        echo "<p>Вы написали: $message</p>";
    }
?>       
</body>
</html>