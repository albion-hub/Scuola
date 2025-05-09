import org.json.JSONObject;

public class Main {

	public static void main(String[] args) {
		
		//https://reqres.in/
		
		GET test = new GET("https://reqres.in/api/unknown/2");
		
		System.out.println(test.getResponse());
		
		String[] headers = {
	            "Content-Type:application/json",
	            "x-api-key:reqres-free-v1",
	    };
		
		String params = "{\"email\": \"eve.holt@reqres.in\", \"password\": \"cityslicka\"}"; 
		
		POST test2 = new POST("https://reqres.in/api/login", headers,params );
		
		System.out.println(test2.getResponse());
		
	}

}
