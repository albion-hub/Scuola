using Library_My_SQL;

namespace Arte
{
    public partial class Artisti : Form
    {
        public Artisti()
        {
            InitializeComponent();
        }

        private void Artisti_Load(object sender, EventArgs e)
        {
            Class_SQL db = new Class_SQL();
            db.Crea_DB_arte();
            string err = db.TestConnessione();
            if (err != "")
                MessageBox.Show(err, "Errore!", MessageBoxButtons.OK, MessageBoxIcon.Error);
            else
            {
                db.Popola_DB_arte();
                dataGridView_Artisti.DataSource = db.Get_Tabella_Artisti();
            }
        }

        private void dataGridView_Artisti_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0) // Controlla che non sia header
            {
                string AR_Codice_Artista = dataGridView_Artisti.Rows[e.RowIndex].Cells["AR_CodiceArtista"].Value.ToString();
                Quadri q = new Quadri(AR_Codice_Artista);
                q.Show(); 
            }
        }
    }
}
