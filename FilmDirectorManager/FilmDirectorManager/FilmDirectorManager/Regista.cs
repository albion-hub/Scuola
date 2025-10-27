using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmDirectorManager
{
    internal class Regista
    {
        public static int contatore = 0;
        int codice_registra;
        string nome;
        string nazionalita;
        int anno_di_nascita;
        List<Film> films_diretti;

        public Regista(string nome, string nazionalita, int anno_di_nascita)
        {
            this.codice_registra = ++contatore;
            this.nome = nome;
            this.nazionalita = nazionalita;
            this.anno_di_nascita = anno_di_nascita;
            films_diretti = new List<Film>();
        }

        public void AddFilm(string titolo, int anno_di_produzione)
        {
            films_diretti.Add(new Film(titolo, anno_di_produzione, this.Codice_registra));
        }


        public int Codice_registra { get => codice_registra; set => codice_registra = value; }
        public string Nome { get => nome; set => nome = value; }
        public string Nazionalita { get => nazionalita; set => nazionalita = value; }
        public int Anno_di_nascita { get => anno_di_nascita; set => anno_di_nascita = value; }
        internal List<Film> Films_diretti { get => films_diretti; set => films_diretti = value; }
    }
}
