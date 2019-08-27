import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import ListItem from './ListItem'
import {getList} from "../../actions"
import { BucketGrid } from './Bucket-Styles'

const BucketList = _ =>
{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(_ =>
        {
            dispatch(getList())
        },[])

    return (
        <BucketGrid>
            {state.bucketList.length > 0 ? state.bucketList.map(item => <ListItem key={item.id} item={item} /> ) : null }
        </BucketGrid>
    )
}

export default BucketList