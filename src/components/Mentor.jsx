import Table from '../components/Table';
import Search from './Search';
import SearchInput from './SearchInput';

function Mentor() {
    return (
        <div className='row'>
            <SearchInput />
            <Search />
            <Table />
        </div>
    );
}

export { Mentor };
