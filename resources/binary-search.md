# Binary search

`left` 與 `right` 控制了 search space

## Templates

### Template 1

可以參考 `704-1-binary-search.ts`

- Initial condition
  - `left = 0`
  - `right = nums.length - 1`
- Termination: `left > right`
- Update search space
  - Searching left: `right = middle - 1`
  - Searching right: `left = middle + 1`
