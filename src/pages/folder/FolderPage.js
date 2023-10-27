import React, { useEffect, useState } from 'react';
import './folderPage.css';
import AddLinkInput from './components/addLinkInput/AddLinkInput';
import SortButton from './components/sortButton/SortButton';
import SORT_BUTTON_NAME from './constant';
import addIcon from '../../assets/folder/add.svg';
import SearchBar from '../../components/searchBar/SearchBar';
import getUserLinks from '../../api/folder';
import Card from '../../components/card/Card';

export default function FolderPage() {
  const [category, setCategory] = useState('전체');
  const [folders, setFolders] = useState([]);

  useEffect(async () => {
    const result = await getUserLinks();
    const { data } = result;
    setFolders(data);
  }, []);

  return (
    <div className="folder-container">
      <header className="folder-header">
        <AddLinkInput />
      </header>
      <main className="folder-main">
        <SearchBar />
        <section className="folder-content-section">
          <div className="folder-sort-add-buttons-container">
            <div className="folder-sort-buttons-container">
              {SORT_BUTTON_NAME.map((item) => (
                <SortButton onClick={setCategory}>{item}</SortButton>
              ))}
            </div>
            <button type="button" className="folder-add-button">
              폴더 추가
              <img src={addIcon} alt="add-icon" />
            </button>
          </div>
          <h1 className="folder-category">{category}</h1>
        </section>
        <div className="links-container">
          {folders &&
            folders.map((item) => (
              <div key={item.id}>
                <Card linkInfo={item} />
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
