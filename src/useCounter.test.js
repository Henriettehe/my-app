import { renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

it.only('should use provided initial value for count', () => {
    const { result } = renderHook(() => useCounter(5))

    expect(result.current.count).toBe(5)
})