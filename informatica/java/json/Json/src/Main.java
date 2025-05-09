/**
 * https://www.baeldung.com/java-org-json
 */
import java.util.Iterator;

import org.json.JSONArray;
import org.json.JSONObject;

public class Main {
	
	static String json = """
	{
		"pageInfo":
		{
			"pageName": "Homepage",
			"logo": "https://www.example.com/logo.jpg"
		},
		"posts": [
			{
				"post_id": "0123456789",
				"actor_id": "1001",
				"author_name": "Jane Doe",
				"post_title": "How to parse JSON in Java",
				"comments": [],
				"time_of_post": "1234567890"
			},
			{
				"post_id": "99999999",
				"actor_id": "1001",
				"author_name": "Jane Doe",
				"post_title": "How to parse JSON in Java",
				"comments": [],
				"time_of_post": "999999999"
			}
		]
	}
	""";
	
    public static void main(String[] args) {
        JSONObject jsonObj = new JSONObject(json);
        System.out.println(jsonObj.getJSONObject("pageInfo").getString("pageName"));
        
        JSONObject obj = jsonObj.getJSONObject("pageInfo");
        System.out.println(obj.get("logo"));
        
        System.out.println(jsonObj); 
        
        
        
        JSONArray posts = jsonObj.getJSONArray("posts");

		//******* */ 2 modi per scorrere JSONArray

		// con for e indice
        for (int i = 0; i < posts.length(); i++)
            System.out.println("post_id: " + posts.getJSONObject(i).getString("post_id"));

		// con Iterator e ciclo while
		Iterator<Object> iterator = posts.iterator();
		while (iterator.hasNext()) {
			JSONObject item = (JSONObject) iterator.next();
			System.out.println("post_id: " + item.get("post_id"));
		}
    }
}
