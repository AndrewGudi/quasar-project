import { Screen } from 'quasar'
export const styles = () => {
  if (Screen.xs) {
    return 'padding: 0 16px; width: 100%';
  }
  if (Screen.md || Screen.sm) {
    return 'padding: 0 40px; width: 100%';
  }
}
