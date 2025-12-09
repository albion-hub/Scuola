using Library_My_SQL;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Arte
{
    public partial class Quadri : Form
    {
        private string CodiceArtista;
        public Quadri(string CodiceArtista)
        {
            InitializeComponent();
            this.CodiceArtista = CodiceArtista;
        }

        private void Quadri_Load(object sender, EventArgs e)
        {
            Class_SQL db = new Class_SQL();
            dataGridViewQuadri.DataSource = db.Get_Quadri(this.CodiceArtista);
        }
    }
}
