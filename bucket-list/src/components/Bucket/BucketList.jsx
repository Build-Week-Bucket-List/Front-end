import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import ListItem from './ListItem'
import {getList, resetBucketSearch} from "../../actions"
import { BucketGrid } from './Bucket-Styles'
import PrimarySearchAppBar from '../Header'

const BucketList = props =>
{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [localBucket, setLocalBucket] = useState([])
    const [searchString, setSearchString] = useState('')
    
    useEffect(_ => 
        {
            dispatch(getList())
        }, [])
    useEffect(_ =>
        {
            setLocalBucket(state.bucketList)
            
        },[searchString, state.bucketList])

    return (
        <>
            <PrimarySearchAppBar 
                searchPlaceholder={'Search List...'}   
                history={props.history}
                searchString={searchString} 
                setSearchString={setSearchString}
            />
            <BucketGrid>
                {localBucket.length > 0 ? localBucket
                    .filter(item => item.itemtitle.toLowerCase().includes(searchString.toLowerCase()))
                    .map(item => <ListItem key={item.id} item={item} /> ) : null }
            </BucketGrid>
        </>
    )
}

export default BucketList