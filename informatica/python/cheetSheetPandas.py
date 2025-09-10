import pandas as pd

# Creazione di oggetti

# Crea un DataFrame da dizionario o lista
df = pd.DataFrame(data)
# Crea una Series (colonna singola)
s = pd.Series(data)

#Lettura e scrittura di file

# CSV
pd.read_csv('file.csv')      # Legge un file CSV
df.to_csv('file.csv')        # Salva un DataFrame in CSV
# Excel
pd.read_excel('file.xlsx')   # Legge un file Excel
df.to_excel('file.xlsx')     # Salva un DataFrame in Excel
# JSON
pd.read_json('file.json')    # Legge un file JSON
df.to_json('file.json')      # Salva in JSON

#Esplorazione dati
df.head(n)        # Prime n righe
df.tail(n)        # Ultime n righe
df.shape          # Restituisce (righe, colonne)
df.columns        # Nomi colonne
df.index          # Indici
df.info()         # Informazioni generali sul DataFrame
df.describe()     # Statistiche descrittive per colonne numeriche
df.dtypes         # Tipo di dato per colonna
df.memory_usage() # Utilizzo di memoria

#Selezione e filtraggio
df['col']              # Seleziona una colonna
df['col'].values       #restutuisce una tupla
df[['col1', 'col2']]   # Seleziona più colonne
df.loc[0]              # Seleziona riga per etichetta
df.iloc[0]             # Seleziona riga per indice

df.loc[0, 'col']       # Seleziona un valore specifico
df.iloc[0, 1]          # Valore con indici numerici

df[df['col'] > 10]     # Filtro per condizione
df.query('col > 10')   # Filtro con sintassi query

#Modifica dei dati
df['col'] = valore                         # Modifica/aggiunge colonna
df.rename(columns={'old': 'new'})          # Rinomina colonne
df.set_index('col')                        # Imposta una colonna come indice
df.reset_index()                           # Resetta l'indice
df.drop('col', axis=1)                     # Elimina colonna
df.drop(index=0)                           # Elimina riga
df.replace({'vecchio': 'nuovo'})           # Sostituisce valori
df.astype({'col': int})                    # Converte tipo di dato

#Operazioni su dati
df['new'] = df['a'] + df['b']              # Nuova colonna da operazioni
df.apply(funzione)                         # Applica funzione a righe o colonne
df.map(funzione)                           # Applica funzione a una Series
df.applymap(funzione)                      # Applica funzione a tutto il DataFrame
df.pipe(funzione)                          # Usa pipe per concatenare operazioni

#Raggruppamento e aggregazione
df.groupby('col')                          # Raggruppa per colonna
df.groupby('col').agg(['mean', 'sum'])     # Aggrega con più funzioni
df.pivot_table(values='val', index='row', columns='col')  # Crea tabella pivot
pd.crosstab(df['col1'], df['col2'])        # Tabella di contingenza

# Statistiche descrittive
df.mean()         # Media
df.median()       # Mediana
df.mode()         # Moda
df.std()          # Deviazione standard
df.var()          # Varianza
df.min()          # Minimo
df.max()          # Massimo
df.count()        # Conteggio non nulli
df.corr()         # Correlazione
df.cov()          # Covarianza

#Unione, merging e concatenazione
pd.concat([df1, df2])                          # Concatena lungo un asse
pd.merge(df1, df2, on='col')                   # Merge stile SQL
df1.join(df2, how='left')                      # Join su indici

#Ordinamento
df.sort_values('col')                         # Ordina per colonna
df.sort_index()                               # Ordina per indice

#Gestione dei valori nulli
df.isnull()              # True dove ci sono NaN
df.notnull()             # True dove NON ci sono NaN
df.dropna()              # Rimuove righe con NaN
df.fillna(valore)        # Riempie i NaN con un valore
df.ffill()               # Propaga valori precedenti (forward fill)
df.bfill()               # Propaga valori successivi (backward fill)

#Gestione delle date
pd.to_datetime(df['data'])   # Converte in datetime
df['data'].dt.year           # Estrae anno
df['data'].dt.month          # Estrae mese
df['data'].dt.day            # Estrae giorno
df['data'].dt.weekday        # Giorno della settimana

#Altri strumenti utili
df.duplicated()         # True se riga duplicata
df.drop_duplicates()    # Rimuove duplicati
df.sample(n=5)          # Estrae un campione casuale
df.nunique()            # Conta i valori unici
df.value_counts()       # Conta occorrenze (Series)
