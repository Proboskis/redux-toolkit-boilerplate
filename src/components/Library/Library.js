const Library = () => {
    return (
        <div className='library'>
            <h2>Library</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dune</td>
                        <td>F. Herbert</td>
                        <td>10</td>
                        <td>
                            <button className='delete'>x</button>
                        </td>
                    </tr>
                    <tr>
                        <td>The Return of The King</td>
                        <td>J.R.R. Tolkien</td>
                        <td>10</td>
                        <td>
                            <button className='delete'>x</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Library;