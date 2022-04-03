import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './drop-file-input.css';
import { useTranslation } from 'react-i18next';

const DropFileInput = (props) => {

    const wrapperRef = useRef(null);
    const [favourites, setFavourites] = useState([]);
    const [fileList, setFileList] = useState([]);
    const fileTypes = ["mp3"];


    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    const fileRemove2 = (file) => {
        const updatedList = [...favourites];
        updatedList.splice(favourites.indexOf(file), 1);
        setFavourites(updatedList);
        props.onFileChange(updatedList);
    }

    const fileAdd = (file) => {
        const newFile = file
        if (newFile) {
            const updatedList = [...favourites, newFile];
            setFavourites(updatedList);
            props.onFileChange(updatedList);
        }
    }
    const { t } = useTranslation();
    return (
        <>

            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <h4>{t('Upload.1')}</h4>
                <div className="drop-file-input__label">


                </div>
                <input type="file" value="" accept=".mp3" onChange={onFileDrop} types={fileTypes} />
            </div>
            <div class="trendingTracks__title sc-font-light">{t('Here.1')}</div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">

                        {
                            fileList.map((item, index) => (
                                
                                <div key={index} className="drop-file-preview__item">


                                    <div className="drop-file-preview__item__info">
                                        <p id="col">{t('Song.1')}: {item.name}</p>
                                        <p id="col">{t('Song.2')}: {item.size} B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                    <button className='fav' onClick={() => fileAdd(item)}><svg
                                        width='1em'
                                        height='1em'
                                        viewBox='0 0 16 16'
                                        class='bi bi-heart-fill'
                                        fill='red'
                                        xmlns='http://www.w3.org/2000/svg'



                                    >
                                        <path
                                            fill-rule='evenodd'
                                            d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                                        />
                                    </svg></button>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }

            
            <div class="trendingTracks__title sc-font-light">{t('Fav.1')}</div>
            {
                favourites.length > 0 ? (
                    <div className="drop-file-preview">

                        {
                            favourites.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">

                                    <div className="drop-file-preview__item__info">
                                        <p id="col">{t('Song.1')}: {item.name}</p>
                                        <p id="col">{t('Song.2')}: {item.size} B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove2(item)}>x</span>

                                </div>
                            ))
                        }
                    </div>
                ) : null

            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
