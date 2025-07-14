/* src/components/Input/styles.ts */
import { StyleSheet } from 'react-native';
import { colors, spacing, font } from '../../theme';

export const styles = StyleSheet.create({
  /** bloco inteiro (ícone + input) */
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.textPrimary,
    borderRadius: 8,
    marginBottom: spacing.md,
    overflow: 'hidden',              // mantém cantos arredondados
  },

  /** caixinha do ícone, mesma altura do input */
  iconBox: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textPrimary,
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },

  icon: {
    color: colors.accent,
  },

  /** área de digitação */
  control: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    fontSize: font.size.md,
    fontFamily: font.family.regular,
    color: colors.textOnPrimary,
  },
});
