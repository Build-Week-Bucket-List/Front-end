import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import ListItem from './ListItem'
import {getList, resetBucketSearch} from "../../actions"
import { BucketGrid } from './Bucket-Styles'
import PrimarySearchAppBar from '../Header'

import HeaderTabs from '../HeaderTabs'

const BucketList = props =>
{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [localBucket, setLocalBucket] = useState([])
    const [searchString, setSearchString] = useState('')
    // user does not need to hit enter to run the search
    const isEnterReq = false
    
    useEffect(_ => 
        {
            dispatch(getList())
            if(state.bucketList.length > 0) setLocalBucket(state.bucketList.filter(item => item.completed === false))
        }, [])
    useEffect(_ =>
        {
            setLocalBucket(state.bucketList)
            if(state.bucketList.length > 0) setLocalBucket(state.bucketList.filter(item => item.completed === false))
            
        },[searchString, state.bucketList])

    return (
        <>
            <PrimarySearchAppBar 
                isEnterReq={isEnterReq}
                searchPlaceholder={'Search List...'}   
                history={props.history}
                searchString={searchString} 
                setSearchString={setSearchString}
            />
            <BucketGrid>
                {localBucket.length > 0 ? localBucket
                    .filter(item => item.itemtitle.toLowerCase().includes(searchString.toLowerCase()))
                    .map((item, index) => <ListItem key={index} item={item} /> ) : null }
            </BucketGrid>
        </>
    )
}

export default BucketList