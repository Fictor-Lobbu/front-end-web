// Komponen Header
const Header = () => {
    return (
      <header className="header">
        <h1>Buat Header Menggunakan JSX</h1>
        <p>Tutorial JSX Sederhana</p>
      </header>
    );
  };


const Table = () => {
    return (
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>NAMA</th>
            <th>GENDER</th>
            <th>JURUSAN</th>
            <th>NO WA</th>
            <th>ALAMAT</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Fictor Retno Lobbu</td>
          <td>Pria</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>Airmadidi</td>
          </tr>

          <tr><td>Navys</td>
          <td>Pria</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>Airmadidi</td>
          </tr>
          <tr><td>Arlin maythree Tumbal</td>
          <td>wanita</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>Airmadidi</td>
          </tr>
          <tr><td>Freshy Rembet</td>
          <td>wanita</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>asrama</td>
          </tr>
          <tr><td>Angie Manueke</td>
          <td>wanita</td>
          <td>si</td>
          <td>08xxxxx</td>
          <td>asrama</td>
          </tr>
    
        </tbody>
      </table>
    );
  };


  const App = () => {
    return (
        <div>
            <Header/>
            <Table />
        </div>
    );
  };

  ReactDOM.render (<App />, document.getElementById('app'));