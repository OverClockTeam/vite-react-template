import { RootState } from '@app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { changeState, getState } from './service'

interface DemoState {
  demoState: number
  loading: boolean
}

const initialState: DemoState = {
  demoState: 1,
  loading: false,
}

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setDemoState(state, action: PayloadAction<number>) {
      state.demoState = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(changeState.pending, (state, action) => {
        const newState = action.meta.arg
        state.loading = true
        state.demoState = newState
      })
      .addCase(changeState.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(changeState.rejected, (state) => {
        state.loading = false
      })

      .addCase(getState.pending, (state) => {
        state.loading = true
      })
      .addCase(getState.fulfilled, (state, action) => {
        state.loading = false
        state.demoState = action.payload.state
      })
      .addCase(getState.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { setDemoState } = demoSlice.actions

export const selectDemoState = (state: RootState) => state.demo.demoState
export const selectLoading = (state: RootState) => state.demo.loading

export default demoSlice.reducer
