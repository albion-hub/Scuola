import org.json.JSONObject;

public class Main {

	public static void main(String[] args) {
		
		//https://reqres.in/
		String[] headers = {
				"Content-Type:application/json",
				"x-api-key:reqres-free-v1",
		};
		
		GET test = new GET("https://reqres.in/api/unknown/2", headers);
		
		System.out.println(test.getResponse());
		System.out.println(test.getResponse().getJSONObject("data"));
		
		String params = "{\"email\": \"eve.holt@reqres.in\", \"password\": \"cityslicka\"}"; 
		
		POST test2 = new POST("https://reqres.in/api/login", headers,params );
		
		System.out.println(test2.getResponse());
		System.out.println(test2.getResponse().get("token"));
	}

}
