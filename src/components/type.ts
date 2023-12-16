
// 状態の型を定義
export type State = {
    count: number;
};

// アクションの型を定義
export type Action = { type: 'increment' } | { type: 'decrement' };