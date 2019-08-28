import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import ListItem from './ListItem'
import {getList, resetBucketSearch} from "../../actions"
import { BucketGrid } from './Bucket-Styles'
import PrimarySearchAppBar from '../Header'

import HeaderTabs from '../HeaderTabs'

const Archive = props =>
{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [archiveBucket, setArchiveBucket] = useState([])
    const [searchString, setSearchString] = useState('')
    
    useEffect(_ => 
        {
            dispatch(getList())
            if(state.bucketList.length > 0) setArchiveBucket(state.bucketList.filter(item => item.completed === true))
        }, [])
    useEffect( _ =>
        {
            console.log('state.bucketlist', state.bucketList)
            setArchiveBucket(state.bucketList.filter(item => item.completed === true))
            console.log('archiveBucket:', archiveBucket)
        },[searchString, state.bucketList])

    return (
        <>
            <PrimarySearchAppBar 
                searchPlaceholder={'Search List...'}   
                history={props.history}
                searchString={searchString} 
                setSearchString={setSearchString}
            />
            {/* <HeaderTabs /> */}
            <BucketGrid>
                {archiveBucket.length > 0 ? archiveBucket
                    .filter(item => item.itemtitle.toLowerCase().includes(searchString.toLowerCase()))
                    .map(item => <ListItem key={item.id} item={item} /> ) : null }
            </BucketGrid>
        </>
    )
}

export default Archive