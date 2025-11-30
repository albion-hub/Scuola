using MySql.Data.MySqlClient;
using System.Data;

namespace Library_My_SQL
{
    public class Class_SQL
    {
        public string TestConnessione()
        {
            try
            {                                                      ////Server=localhost;Database=Arte;Uid=root;Pwd=''
                using (MySqlConnection conn = new MySqlConnection(Properties.Settings.Default.connect))
                {
                    conn.Open();
                    return "";  // OK connessione
                }
            }
            catch (Exception ex)
            {
                return ex.Message; // No connessione probabile servizio MySql spento
            }
        }
        public void Crea_DB_arte()
        {
            try
            {
                string file = "Arte_Creazione_Database_Tabelle.sql";

                using (MySqlConnection conn = new MySqlConnection(Properties.Settings.Default.connect))   //alla fine chiude lui la con
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand();
                    cmd.Connection = conn;

                    string sql = File.ReadAllText(file);

                    string[] commands = sql.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);

                    foreach (string command in commands)
                    {
                        string cmdText = command.Trim();

                        if (string.IsNullOrWhiteSpace(cmdText) || cmdText.StartsWith("--"))
                            continue;

                        cmd.CommandText = cmdText + ";";
                        cmd.ExecuteNonQuery();
                    }
                
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Errore: {ex.Message}");
            }
        }
        public void Popola_DB_arte()
        {
            try
            {
                string file = "Arte_Popola_Database.sql";

                using (MySqlConnection conn = new MySqlConnection(Properties.Settings.Default.connect_db_arte))   //alla fine chiude lui la con
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand();
                    cmd.Connection = conn;

                    string sql = File.ReadAllText(file);

                    string[] commands = sql.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);

                    foreach (string command in commands)
                    {
                        string cmdText = command.Trim();

                        if (string.IsNullOrWhiteSpace(cmdText) || cmdText.StartsWith("--"))
                            continue;

                        cmd.CommandText = cmdText + ";";
                        cmd.ExecuteNonQuery();
                    }

            }
            }catch(Exception ex)
            {
                Console.WriteLine($"Errore: {ex.Message}");
            }
        }
        public DataTable Get_Tabella_Artisti()
        {
            // Crea una nuova connessione MySQL usando la connection string dalle impostazioni
            MySqlConnection conn = new MySqlConnection(Properties.Settings.Default.connect_db_arte);

            // Crea un oggetto comando che servirà per eseguire la query
            MySqlCommand com = new MySqlCommand();

            // Crea un adapter, che permette di riempire DataTable eseguendo comandi SQL
            MySqlDataAdapter adapter = new MySqlDataAdapter();

            // Crea una DataTable vuota che conterrà i risultati della query
            DataTable tabella = new DataTable();

            // Associa la connessione al comando SQL
            com.Connection = conn;

            // Imposta il testo del comando: in questo caso una SELECT su tutta la tabella Clienti
            com.CommandText = "SELECT * FROM Artisti";

            // Imposta che il comando da eseguire quando si fa il Fill è quello appena definito
            adapter.SelectCommand = com;

            // Apre la connessione automaticamente, esegue la query, 
            // recupera i dati e li inserisce nella DataTable
            adapter.Fill(tabella);

            // Restituisce la DataTable piena con i dati dei Clienti
            return tabella;
        }
        public DataTable Get_Quadri(string codice_artista)
        {
            MySqlConnection conn = new MySqlConnection(Properties.Settings.Default.connect_db_arte);
            MySqlCommand com = new MySqlCommand();
            MySqlDataAdapter adapter = new MySqlDataAdapter();
            DataTable tabella = new DataTable();
            com.Connection = conn;
            com.CommandText = $"SELECT * FROM quadri WHERE QQ_CodiceArtista = '{codice_artista}'";
            adapter.SelectCommand = com;
            adapter.Fill(tabella);
            return tabella;
        }
    }

}
