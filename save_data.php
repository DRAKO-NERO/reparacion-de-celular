<?php
// Verificar si los datos se enviaron correctamente
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $message = $data['message'] ?? '';

    // Validar los datos
    if ($name && $email && $message) {
        // Aquí puedes guardar los datos en la base de datos o en un archivo
        // Por ejemplo, guardar en un archivo (opcional):
        file_put_contents('form_data.txt', "Nombre: $name\nCorreo o WhatsApp: $email\nMensaje: $message\n\n", FILE_APPEND);

        // Responder con éxito
        echo json_encode(['success' => true]);
    } else {
        // Si los datos no son válidos
        echo json_encode(['success' => false]);
    }
}
?>

