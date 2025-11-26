using ClassLibraryDB;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WinFormsAppProvaDB
{
    public partial class Fatture : Form
    {
        int idClinte;
        public Fatture(int idClinte)
        {
            InitializeComponent();
            this.idClinte = idClinte;
        }

        private void Fatture_Load(object sender, EventArgs e)
        {
            ClassDB db = new ClassDB();
            dataGridViewFatture.DataSource = db.Get_Fatture(idClinte);
            labelSomma.Text = $"{db.Get_Somma_Fatture(idClinte)}"; 

        }
    }
}
