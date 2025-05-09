import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class GET {
	
	private URL url; 
	private int responseCode;
	private StringBuilder response; 
	
	public GET(String url) {
		try {			
			this.url = (new URI(url)).toURL(); 
			// Aprire una connessione HTTP
            HttpURLConnection connection = (HttpURLConnection) this.url.openConnection();
            
			// Impostare il metodo della richiesta (GET, POST, PUT, DELETE, ecc.)
            connection.setRequestMethod("GET");

            // Impostare il timeout per la connessione e la lettura
            connection.setConnectTimeout(5000);
            connection.setReadTimeout(5000);
            
            this.responseCode = connection.getResponseCode();
            
            if (responseCode == HttpURLConnection.HTTP_OK) { // 200
                // Leggere il corpo della risposta
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                this.response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    this.response.append(inputLine);
                }
                in.close();

            } else {
                this.response =  new StringBuilder("none");
            }
		}
		catch (Exception e) {
            e.printStackTrace();
        }
	}
	
	public int getResponseCode() {
		return this.responseCode; 
	}
	
	public JSONObject getResponse() {
		return new JSONObject(this.response.toString()); 
	}
}
