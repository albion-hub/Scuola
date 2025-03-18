import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;

public class HttpClientExample {
    public static void main(String[] args) {
        try {
            // Utilizza URI per creare l'URL in modo sicuro
            URI uri = new URI("https://jsonplaceholder.typicode.com/posts/1");
            URL url = uri.toURL(); // Converti URI in URL

            // Aprire una connessione HTTP
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Impostare il metodo della richiesta (GET, POST, PUT, DELETE, ecc.)
            connection.setRequestMethod("GET");

            // Impostare il timeout per la connessione e la lettura
            connection.setConnectTimeout(5000);
            connection.setReadTimeout(5000);

            // Leggere la risposta
            int responseCode = connection.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            if (responseCode == HttpURLConnection.HTTP_OK) { // 200
                // Leggere il corpo della risposta
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                // Stampare la risposta
                System.out.println("Response Body: " + response.toString());
            } else {
                System.out.println("GET request not worked" + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}