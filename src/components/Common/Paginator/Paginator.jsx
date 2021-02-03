import React, {useState} from 'react';
import style from "./Paginator.module.css";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Pagination from "@material-ui/lab/Pagination";
// import cn from "classnames";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, pageNumber}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;



    return (

            <div>

                {/*{ portionNumber > 1 &&*/}
                {/*<PaginationItem textSecondary variant={'outlined'} type={'previous'} onClick={ () => { setPortionNumber (portionNumber - 1 )} }>Prev</PaginationItem>}*/}
                {/*{pages*/}
                {/*    .filter( p => p >= leftPortionNumber && p <= rightPortionNumber)*/}
                {/*    .map((p) => {*/}
                {/*    return <PaginationItem textSecondary variant={'outlined'} page={p} className={currentPage === p && style.select_page} onClick={(e) => {*/}
                {/*        onPageChanged(p);*/}
                {/*    }}/>*/}
                {/*})}*/}
                {/*{ portionCount > portionNumber &&*/}
                {/*<PaginationItem textSecondary variant={'outlined'} type={'next'} onClick={ () => { setPortionNumber (portionNumber + 1 )} }>Next</PaginationItem>}*/}
                <Pagination className={style.pagination}  count={pagesCount} color="primaty" variant="outlined" onChange={(event,val) => {
                    onPageChanged(val);
                }}/>

            </div>
    );

}


export default Paginator;