import service from '@/services/service'
import createAppAsyncThunk from '@/utils/createAppAsyncThunk'
import { DemoType } from '../types/DemoType'

export const changeState = createAppAsyncThunk(
  '/demo/changeState',
  async (newState: number, { rejectWithValue }) => {
    try {
      return await service({
        url: '/demo/state',
        method: 'post',
        data: {
          newState,
        },
      })
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getState = createAppAsyncThunk(
  '/demo/getState',
  async (_, { rejectWithValue }) => {
    try {
      return (await service({
        url: 'demo/state',
        method: 'get',
      })) as DemoType
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
