import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import ListItem from './ListItem'
import {getList, resetBucketSearch} from "../../actions"
import { BucketGrid } from './Bucket-Styles'
import PrimarySearchAppBar from '../Header'

const BucketList = _ =>
{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(_ =>
        {
            dispatch(getList())
            dispatch(resetBucketSearch())
        },[])

    return (
        <>
            <PrimarySearchAppBar searchPlaceholder={'Search List...'} page={`bucket`} />
            <BucketGrid>
                {state.bucketList.length > 0 ? state.bucketList
                    .filter(item => item.itemtitle.toLowerCase().includes(state.searchBucketString.toLowerCase()))
                    .map(item => <ListItem key={item.id} item={item} /> ) : null }
            </BucketGrid>
        </>
    )
}

export default BucketList