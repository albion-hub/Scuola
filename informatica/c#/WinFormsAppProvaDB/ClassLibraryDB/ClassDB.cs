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
        public DataTable Get_Fatture(int idCliente)
        {
            MySqlConnection connection = new MySqlConnection("Server=localhost;Database=clienti;Uid=root;Pwd=''");
            MySqlCommand command = new MySqlCommand();
            command.Connection = connection;
            command.CommandText = $"SELECT * FROM fatture WHERE idCliente={idCliente}";
            MySqlDataAdapter adapter = new MySqlDataAdapter();
            adapter.SelectCommand = command;
            DataTable dt = new DataTable();
            adapter.Fill(dt);

            return dt;
        }

        public double Get_Somma_Fatture(int idCliente)
        {
            MySqlConnection connection = new MySqlConnection("Server=localhost;Database=clienti;Uid=root;Pwd=''");
            MySqlCommand command = new MySqlCommand();
            command.Connection = connection;
            command.CommandText = $"SELECT SUM(importo) FROM fatture WHERE idCliente={idCliente}";

            connection.Open();

            object result = command.ExecuteScalar();   // somma
            connection.Close();

            if (result != null && result != DBNull.Value)
                return Convert.ToDouble(result);
            else
                return 0;
        }
    }
}
