import { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../../features/user/userSlice';
import { GetSingleUserApi } from '../../../service/operations/userApi';

function AssignmentUserSearch({onSelect ,user_id}) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.user);

    const items = data?.slice().sort((a, b) => a.name.localeCompare(b.name)) || [];
    
    useEffect(() => {

      if(user_id!==null){
        GetSingleUserApi(user_id)
        .then((selectedUser) => {
                console.log(selectedUser)
                  setSelectedItem(selectedUser.user);
              })
              .catch((error) => {
                  console.error("Error fetching user:", error);
              });
      }
    }, [user_id]);
  
    useEffect(() => {
      dispatch(fetchAllUsers());
    }, [dispatch]);
  
    const searchItems = (event) => {
      const query = event.query.toLowerCase().trim();
      setFilteredItems(
        items.filter((item) => item.name.toLowerCase().includes(query))
      );
    };
  
    const itemTemplate = (item) => (
      <div className="user-search-card">
        <img
          alt="avatar"
          src={`https://avatar.iran.liara.run/username?username=${item.name}`}
          onError={(e) => (e.target.src = 'https://avatar.iran.liara.run/public/boy')}
          className="user-search-card-img"
        />
        <p className="usc-name">{item.name}</p>
        <p className="usc-email">{item.email}</p>
      </div>
    );
  
  
    const handleSelectionChange = (e) => {
      setSelectedItem(e.value);
      onSelect(e.value); // Pass selected user to parent
    };
  
    return (
      <div>
        <p className="recent-project-card-timeleft mb-1" style={{ fontSize: '14px' }}>
          Assignee
        </p>
        <AutoComplete
          value={selectedItem}
          suggestions={filteredItems}
          completeMethod={searchItems}
          field="name"
          dropdown
          onChange={handleSelectionChange}
          itemTemplate={itemTemplate}
          className="w-100 search-assignee-bar p-0"
        />
      </div>
    );
}

export default AssignmentUserSearch