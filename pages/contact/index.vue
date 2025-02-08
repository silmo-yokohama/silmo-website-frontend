<script setup lang="ts">
  /**
   * @file お問い合わせフォームページコンポーネント
   * @description お問い合わせを受け付けるフォームを提供する
   *
   * 機能：
   * - フォームバリデーション
   * - スパム防止（ハニーポット、送信時間チェック）
   * - 送信完了メッセージ表示
   *
   * 制限事項：
   * - 実際のメール送信処理は未実装
   */

  import { mailSubjects } from '~/constants/mailSubjects';
  import { FORM_ERROR_MESSAGES } from '~/constants/errors';
  import type { ContactForm } from '~/types/form';

  definePageMeta({
    layout: 'default',
  });

  const form = reactive<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
    timestamp: 0,
  });

  const errors = reactive<Record<keyof Omit<ContactForm, 'honeypot' | 'timestamp'>, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const isSubmitting = ref(false);
  const showSuccess = ref(false);

  /**
   * フォームのバリデーションを実行
   * @returns {boolean} バリデーション結果
   */
  const validateForm = () => {
    let isValid = true;

    // 名前のバリデーション
    if (!form.name.trim()) {
      errors.name = FORM_ERROR_MESSAGES.REQUIRED_NAME;
      isValid = false;
    } else {
      errors.name = '';
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      errors.email = FORM_ERROR_MESSAGES.REQUIRED_EMAIL;
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      errors.email = FORM_ERROR_MESSAGES.INVALID_EMAIL;
      isValid = false;
    } else {
      errors.email = '';
    }

    // 件名のバリデーション
    if (!form.subject) {
      errors.subject = FORM_ERROR_MESSAGES.REQUIRED_SUBJECT;
      isValid = false;
    } else {
      errors.subject = '';
    }

    // メッセージのバリデーション
    if (!form.message.trim()) {
      errors.message = FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
      isValid = false;
    } else if (form.message.length < 10) {
      errors.message = FORM_ERROR_MESSAGES.MIN_LENGTH_MESSAGE;
      isValid = false;
    } else {
      errors.message = '';
    }

    return isValid;
  };

  /**
   * スパムチェックを実行
   * @returns {boolean} スパム判定結果
   */
  const isSpam = () => {
    if (form.honeypot) {
      return true;
    }
    const timeDiff = Date.now() - form.timestamp;
    return timeDiff < 3000;
  };

  /**
   * フォームの入力内容をリセット
   */
  const resetForm = () => {
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    });
    Object.keys(errors).forEach((key) => {
      errors[key as keyof typeof errors] = '';
    });
  };

  /**
   * フォームを送信
   */
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    if (isSpam()) {
      console.warn('Spam detected');
      showSuccess.value = true;
      return;
    }

    isSubmitting.value = true;

    try {
      // TODO: 実際のAPI呼び出しを実装
      await new Promise((resolve) => setTimeout(resolve, 1000));
      resetForm();
      showSuccess.value = true;

      setTimeout(() => {
        showSuccess.value = false;
      }, 3000);
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    } finally {
      isSubmitting.value = false;
    }
  };

  onMounted(() => {
    form.timestamp = Date.now();
  });
</script>
<template>
  <common-page-title
    title="Contact"
    subtitle="お問い合わせ"
    description="新しいプロジェクトのご相談やお問い合わせをお待ちしています。 以下のフォームからメッセージをお送りください。"
  />
  <layouts-content-wrapper>
    <!-- 注意事項（よりシンプルに） -->
    <ui-block-notice
      title="お問い合わせの前に"
      variant="info"
      :list="[
        '返信は平日の営業時間内（9:00-18:00）となります',
        '内容によっては回答に時間を要する場合がございます',
        '携帯電話のメールアドレスをご利用の場合は、ドメイン指定受信を設定されている可能性がありますのでご注意ください',
      ]"
    />

    <client-only>
      <!-- フォーム -->
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <!-- お名前 -->
        <div>
          <ui-form-label text="お名前" html-for="name" required />
          <ui-form-input id="name" v-model="form.name" type="text" placeholder="山田 太郎" required :error="errors.name" />
        </div>

        <!-- メールアドレス -->
        <div>
          <ui-form-label text="メールアドレス" html-for="email" required />
          <ui-form-input id="email" v-model="form.email" type="email" placeholder="your@email.com" required :error="errors.email" />
        </div>

        <!-- 件名 -->
        <div>
          <ui-form-label text="お問い合わせ内容" html-for="subject" required />
          <ui-form-select id="subject" v-model="form.subject" :options="mailSubjects" required :error="errors.subject" />
        </div>

        <!-- メッセージ -->
        <div>
          <ui-form-label text="メッセージ" html-for="message" required />
          <ui-form-textarea id="message" v-model="form.message" placeholder="ご相談内容をご記入ください" required :error="errors.message" />
        </div>

        <!-- スパム防止のハニーポット -->
        <div class="hidden">
          <input v-model="form.honeypot" type="text" tabindex="-1" autocomplete="off" />
        </div>

        <!-- ボタン群 -->
        <div class="flex items-center justify-center gap-4 pt-4">
          <common-button
            type="button"
            class="px-6 py-2.5 text-sm border border-gray-200 dark:border-white/10 hover:border-primary hover:text-primary rounded-lg transition-colors duration-200"
            @click="resetForm"
          >
            リセット
          </common-button>
          <common-button
            type="submit"
            :disabled="isSubmitting"
            class="px-8 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">送信中...</span>
            <span v-else>送信する</span>
          </common-button>
        </div>
      </form>
    </client-only>

    <!-- 送信完了メッセージ -->
    <div v-if="showSuccess" class="mt-6">
      <div
        class="p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg text-center text-sm border border-green-100 dark:border-green-900/50"
      >
        メッセージを送信しました。確認次第、返信させていただきます。
      </div>
    </div>
  </layouts-content-wrapper>
</template>
