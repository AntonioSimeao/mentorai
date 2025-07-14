import { StyleSheet } from 'react-native';
import { colors, spacing, font } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
    marginTop: spacing.xxl,
  },
  title: {
    fontFamily: font.family.bold,
    fontSize: font.size.hero,
    color: colors.accent,
    marginLeft: spacing.sm,
    fontWeight: "700",
  },
  icon: {
    fontSize: font.size.hero,
    color: colors.accent,
  },
  form: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 12,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  buttonText: {
    color: colors.textPrimary,
    fontFamily: font.family.bold,
    fontSize: font.size.md,
  },
    caption: {
    fontFamily: font.family.bold,
    fontSize: font.size.md,
    color: colors.textOnPrimary,
    textAlign: 'justify',
    marginBottom: spacing.xl,
  },
  timer: { color: colors.accent, fontWeight: '600' },
   codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  codeBox: {
    width: 52,
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    textAlign: 'center',
    fontSize: font.size.lg,
    fontFamily: font.family.semibold,
    color: colors.textOnPrimary,
    backgroundColor: colors.textPrimary,
  },
resendBtn: { marginTop: spacing.lg, alignItems: 'center' },
  resendText: {
    fontFamily: font.family.semibold,
    fontSize: font.size.sm,
  },
  resendEnabled: {},
  resendDisabled: { opacity: 0.4 },
  resendTextEnabled: { color: colors.primary },
  resendTextDisabled: { color: colors.textPrimary },
});