

import { useMemoState }  from './useMemoState'
import { renderHook, act } from '@testing-library/react-hooks'





describe('The useMemoState', () => {

    // it('should not throw an error', () => {
    //     renderHook(() => useMemoState())
    // })

    // it('should return state the same type and value as input: number', () => {
    //     const {result} = renderHook(() => useMemoState(23))
    //     expect (result.current[0]).toBe(23)
    //     expect (typeof result.current[0]).toBe('number')
    // })

    // it('should return state the same type and value as input: string', () => {
    //     const {result} = renderHook(() => useMemoState('Raven'))
    //     expect (result.current[0]).toBe('Raven')
    //     expect (typeof result.current[0]).toBe('string')
    // })
    // it('should return state the same type and value as input: array', () => {
    //     const {result} = renderHook(() => useMemoState([1, 2, 'Greg']))
    //     // expect (result.current[0]).toBe('Raven')
    //     expect (Array.isArray(result.current[0])).toBe(true)
    // })

    it('', () => {
        const {result} = renderHook(() => useMemoState({val:1}))

        act(() => { 
            result.current[1]({val:2})

        })

        console.log(result.current[0])
        console.log(result.current[1])
    })


})