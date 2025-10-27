using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmDirectorManager
{
    internal class Film
    {
        public static int contatore = 0;
        int codice_film;
        string titolo;
        int anno_di_produzione;
        int codice_regista;

        
        public Film(string titolo, int anno_di_produzione, int codice_regista)
        {
            this.codice_film = ++contatore;
            this.titolo = titolo;
            this.anno_di_produzione = anno_di_produzione;
            this.codice_regista = codice_regista;
        }

        public  int Codice_film { get => codice_film; set => codice_film = value; }
        public string Titolo { get => titolo; set => titolo = value; }
        public int Anno_di_produzione { get => anno_di_produzione; set => anno_di_produzione = value; }
        public int Codice_regista { get => codice_regista; set => codice_regista = value; }
    }
}
