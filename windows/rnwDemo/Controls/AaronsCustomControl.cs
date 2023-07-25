using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Documents;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;

namespace rnwDemo.Controls
{
	public sealed class AaronsCustomControl : Control
	{
		public static DependencyProperty LabelProperty { get; private set; }

		public string Label
		{
			get
			{
				return (string)GetValue(LabelProperty);
			}
			set
			{
				SetValue(LabelProperty, value);
			}
		}

		static AaronsCustomControl()
		{
			LabelProperty = DependencyProperty.Register(
				nameof(Label),
				typeof(string),
				typeof(AaronsCustomControl),
				new PropertyMetadata(default(string))
				);
		}

		public AaronsCustomControl()
		{
			DefaultStyleKey = typeof(AaronsCustomControl);
		}
	}
}
