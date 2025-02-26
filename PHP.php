<?php
// Укажите ваш email, на который будут приходить заявки
$to = "leonid.osaylenko.2007@mail.com";

// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = $_POST["name"];
    $email = $_POST["email"];
    $date = $_POST["date"];
    $guests = $_POST["guests"];
    $message = $_POST["message"];

    // Формируем сообщение для email
    $subject = "Новая заявка на бронирование клуба";
    $body = "Имя: " . $name . "\n"
           . "Email: " . $email . "\n"
           . "Дата: " . $date . "\n"
           . "Количество гостей: " . $guests . "\n"
           . "Сообщение: " . $message;

    // Отправляем email
    $headers = "From: " . $email . "\r\n"
               . "Reply-To: " . $email . "\r\n"
               . "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        // Если отправка прошла успешно, перенаправляем на страницу благодарности
        header("dd.html");
        exit();
    } else {
        // Если отправка не удалась, выводим сообщение об ошибке
        echo "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.";
    }
} else {
    // Если форма не была отправлена, выводим сообщение об ошибке
    echo "Произошла ошибка. Пожалуйста, попробуйте отправить форму еще раз.";
}
?>