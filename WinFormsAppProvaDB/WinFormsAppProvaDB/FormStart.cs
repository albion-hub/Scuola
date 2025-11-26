using ClassLibraryDB;
namespace WinFormsAppProvaDB
{
    public partial class FormStart : Form
    {
        public FormStart()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            ClassDB db = new ClassDB();
            dataGridViewClienti.DataSource = db.Get_Clienti();
        }

        private void dataGridViewClienti_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            DataGridViewRow riga = dataGridViewClienti.Rows[e.RowIndex];                //riga
            int idCliente = Convert.ToInt32(riga.Cells["idCliente"].Value);            //colona

            Fatture formFatture = new Fatture(idCliente);
            formFatture.Show();
        }

    }
}
