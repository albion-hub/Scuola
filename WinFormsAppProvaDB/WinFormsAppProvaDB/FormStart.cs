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
    }
}
