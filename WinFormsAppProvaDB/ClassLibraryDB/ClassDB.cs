using MySql.Data.MySqlClient;
using System.Data;

namespace ClassLibraryDB
{
    public class ClassDB
    {
       public DataTable Get_Clienti() {
            MySqlConnection connection = new MySqlConnection("Server=localhost;Database=clienti;Uid=root;Pwd=''");
            MySqlCommand command = new MySqlCommand(); 
            command.Connection = connection;
            command.CommandText = "SELECT * FROM clienti"; 
            MySqlDataAdapter adapter = new MySqlDataAdapter();
            adapter.SelectCommand = command;
            DataTable dt = new DataTable();
            adapter.Fill(dt);

            return dt; 
        }
    }
}
