/**
 * https://www.baeldung.com/java-org-json
 */
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONObject;

public class Main {
	public static JSONArray FileJsonToObject(String fileName) {
		try {
			String s = new String(Files.readAllBytes(Paths.get(fileName)));
			return new JSONArray(s);
		}
		catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}
	
    public static void main(String[] args) {
        JSONArray classi = FileJsonToObject("studenti.json");
        System.out.println(classi.length() + " classi");
        
        for (int i = 0; i < classi.length(); i++) {
            System.out.println("\n\nclasse: " + classi.getJSONObject(i).getString("classe"));
            JSONArray studenti = classi.getJSONObject(i).getJSONArray("studenti");
            for (int j = 0; j < studenti.length(); j++) {
            	/*
                System.out.print(studenti.getJSONObject(j).getString("utente"));
                System.out.print("\t" + studenti.getJSONObject(j).getString("nome"));
                System.out.print("\t" + studenti.getJSONObject(j).getString("cognome"));
                System.out.println("\t" + studenti.getJSONObject(j).getString("email"));
                */
                System.out.format("%10s%25s%30s%36s\n", 
            		studenti.getJSONObject(j).getString("utente"), 
            		studenti.getJSONObject(j).getString("nome"), 
            		studenti.getJSONObject(j).getString("cognome"),
            		studenti.getJSONObject(j).getString("email")
                );
            }
        }
        
        /*
        JSONObject obj = jsonObj.getJSONObject("pageInfo");
        System.out.println(obj.get("logo"));

        JSONArray posts = jsonObj.getJSONArray("posts");

        for (int i = 0; i < posts.length(); i++)
            System.out.println("post_id: " + posts.getJSONObject(i).getString("post_id"));

		Iterator<Object> iterator = posts.iterator();
		while (iterator.hasNext()) {
			JSONObject item = (JSONObject) iterator.next();
			System.out.println("post_id: " + item.get("post_id"));
		}
		*/
    }
}
