using System.Data;

namespace FilmDirectorManager
{
    public partial class Film_manager : Form
    {
        private DataTable dt;
        private List<Regista> registri;

        public void caricamento_dati()
        {
            dt = new DataTable();
            DataRow dr;
            this.registri = new List<Regista>();

            registri.Add(new Regista("fellini", "italia", 1920));
            registri[0].AddFilm("otto e mezzo", 1962);
            registri[0].AddFilm("la dolce vita", 1963);

            registri.Add(new Regista("tarantino", "italia", 1964));
            registri[1].AddFilm("pulp fiction", 1994);

            dt.TableName = "Registri"; // Non strettamente necessario
            dt.Columns.Add("codice regist");
            dt.Columns.Add("nome");
            dt.Columns.Add("nazionalità");
            dt.Columns.Add("anno di nascita");

            foreach (Regista r in registri)
            {
                dr = dt.NewRow();
                dr[0] = r.Codice_registra;
                dr[1] = r.Nome;
                dr[2] = r.Nazionalita;
                dr[3] = r.Anno_di_nascita;
                dt.Rows.Add(dr); 
            }

            dG_registri.DataSource = dt;


        }
        public Film_manager()
        {
            InitializeComponent();
        }

        private void Film_manager_Load(object sender, EventArgs e)
        {
            caricamento_dati();
           
        }
    }
}
