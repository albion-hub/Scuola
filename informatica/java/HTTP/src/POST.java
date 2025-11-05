import java.net.HttpURLConnection;

import java.net.URI;
import java.net.URL;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;


public class POST {
	
	private URL url; 
	private int responseCode;
	private StringBuilder response; 
	
	public POST(String url) {
		try {
			this.url = (new URI(url)).toURL(); 
			
			HttpURLConnection connection = (HttpURLConnection) this.url.openConnection();
			connection.setRequestMethod("POST");
			
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
                this.response = new StringBuilder("none");
            }
		}
		catch (Exception e) {
            e.printStackTrace();
        }
	}
	
	public POST(String url, String[] headers, String params) {
		try {
			this.url = (new URI(url)).toURL(); 
			
			HttpURLConnection connection = (HttpURLConnection) this.url.openConnection();
			connection.setRequestMethod("POST");
			
			 // Imposta gli header
	        for (String header : headers) {
	            String[] headerParts = header.split(":");
	            if (headerParts.length == 2) {
	            	connection.setRequestProperty(headerParts[0].trim(), headerParts[1].trim());
	            }
	        }
	        // Indica che si vuole inviare dati nel corpo della richiesta
	        connection.setDoOutput(true);
	        
	        // Scrive il corpo della richiesta nella connessione
	        try (OutputStream os = connection.getOutputStream()) {
	            byte[] input = params.getBytes("utf-8");
	            os.write(input, 0, input.length);
	        }
	        
			this.responseCode = connection.getResponseCode();
            
			try(BufferedReader br = new BufferedReader(
	                new InputStreamReader(connection.getInputStream(), "utf-8"))) {
	                
	                response = new StringBuilder();  // Per costruire la risposta riga per riga
	                String responseLine;
	                
	                // Legge ogni riga della risposta e la aggiunge al StringBuilder
	                while ((responseLine = br.readLine()) != null) {
	                    response.append(responseLine.trim()); // Rimuove eventuali spazi vuoti
	                }
			}
			catch (Exception e) {
	            // TODO: handle exception
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
