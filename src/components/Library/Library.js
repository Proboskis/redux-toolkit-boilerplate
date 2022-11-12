import {useDispatch, useSelector} from 'react-redux';
import {deleteBook} from "../../store/slices/bookSlice";

const Library = () => {
    const dispatch = useDispatch();
    const deleteBookHandler = (id) => {
        dispatch(deleteBook(id));
    };

    const bookList = useSelector((state) => state.books.books);
    const bookTable = bookList.map((book) => (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.rating}</td>
            <td>
                <button
                    className='delete'
                    onClick={() => deleteBookHandler({ id: book.id })}
                >
                    x
                </button>
            </td>
        </tr>
    ));

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
                {bookTable}
                </tbody>
            </table>
        </div>
    );
};

export default Library;