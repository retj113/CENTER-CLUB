<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Получаем данные из формы
  $name = strip_tags(trim($_POST["name"]));
  $name = str_replace(array("\r","\n"),array(" "," "), $name);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $date = strip_tags(trim($_POST["date"]));
  $guests = strip_tags(trim($_POST["guests"]));
  $message = strip_tags(trim($_POST["message"]));

  // Проверяем данные
  if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Пожалуйста, заполните все поля формы и укажите корректный email.";
    exit;
  }

  // Адрес электронной почты, на который будут отправляться письма
  $recipient = "leonid.osaylenko.2007@gmail.com"; // Замени на свой email

  // Тема письма
  $subject = "Новая заявка на бронирование от $name";

  // Содержание письма
  $email_content = "Имя: $name\n";
  $email_content .= "Email: $email\n";
  $email_content .= "Дата: $date\n";
  $email_content .= "Количество гостей: $guests\n\n";
  $email_content .= "Сообщение:\n$message\n";

  // Дополнительные заголовки для письма
  $email_headers = "From: $name <$email>";

  // Отправляем письмо
  if (mail($recipient, $subject, $email_content, $email_headers)) {
    http_response_code(200);
    echo "Спасибо! Ваша заявка отправлена.";
  } else {
    http_response_code(500);
    echo "Произошла ошибка при отправке письма. Попробуйте позже.";
  }

} else {
  // Если кто-то пытается получить доступ к скрипту напрямую
  http_response_code(403);
  echo "Произошла ошибка.";
}
?>